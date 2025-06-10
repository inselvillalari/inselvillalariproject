require("dotenv").config({ path: ".env.local" });

const fs = require("fs");
const path = require("path");
const tinify = require("tinify");

tinify.key = process.env.TINIFY_API_KEY;

const baseDir = path.join(__dirname, "../public/assets/img");

function getAllImagePaths(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImagePaths(filePath));
    } else if (
      [".png", ".jpg", ".jpeg"].includes(path.extname(file).toLowerCase())
    ) {
      results.push(filePath);
    }
  });

  return results;
}

const images = getAllImagePaths(baseDir);

if (images.length === 0) {
  console.log("⚠️ Görsel bulunamadı.");
  process.exit(0);
}

console.log(`🔍 ${images.length} görsel bulundu. Sıkıştırma başlıyor...\n`);

async function compressAll(images) {
  const compressPromises = images.map(async (imgPath, index) => {
    try {
      const originalSize = fs.statSync(imgPath).size;

      // Geçici dosya: sıkıştırılmış hali buraya gelir
      const tempPath = imgPath + ".temp";

      await tinify.fromFile(imgPath).toFile(tempPath);

      const newSize = fs.statSync(tempPath).size;
      const savedPercent = ((originalSize - newSize) / originalSize) * 100;

      if (savedPercent < 1) {
        fs.unlinkSync(tempPath); // fark yoksa temp dosyayı sil
        console.log(
          `⚪ [${index + 1}] ${path.relative(
            baseDir,
            imgPath
          )} zaten optimize (%0 fark)`
        );
      } else {
        fs.renameSync(tempPath, imgPath); // sıkıştırılmış dosyayla değiştir
        console.log(
          `✅ [${index + 1}] ${path.relative(
            baseDir,
            imgPath
          )} sıkıştırıldı (%${savedPercent.toFixed(1)})`
        );
      }
    } catch (err) {
      console.error(`❌ Hata: ${imgPath} →`, err.message);
    }
  });

  await Promise.all(compressPromises);
  console.log("\n🎉 Tüm işlem tamamlandı.");
  process.exit(0);
}

compressAll(images);
