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

console.log(`🔍 ${images.length} görsel bulundu. Sıkıştırılıyor...\n`);

async function compressAll(images) {
  const compressPromises = images.map((imgPath, index) =>
    tinify
      .fromFile(imgPath)
      .toFile(imgPath)
      .then(() => {
        console.log(
          `✅ [${index + 1}] ${path.relative(baseDir, imgPath)} sıkıştırıldı.`
        );
      })
      .catch((err) => {
        console.error(`❌ Hata: ${imgPath} →`, err.message);
      })
  );

  await Promise.all(compressPromises);
  console.log("\n🎉 Tüm görseller başarıyla sıkıştırıldı.");
  process.exit(0);
}

compressAll(images);
