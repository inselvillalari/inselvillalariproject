import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getReservationById } from "../../store/reservation/thunk";
import ReservationSuccessView from "./index";
import PageLoading from "../../components/pageLoading";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";
import { resetReservationDetail } from "../../store/reservation/reducer";

const ReservationSuccessPage = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.reservation);


  useEffect(() => {
    if (query?.conversationId) {
      dispatch(
        getReservationById({ id: query?.conversationId, from: "successPage" })
      );
    }
  }, [query?.conversationId]);

  useEffect(() => {
    return () => dispatch(resetReservationDetail());
  }, []);

  return (
    <>
      {loading && <PageLoading />}
      <ReservationSuccessView />
    </>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default withLoading(ReservationSuccessPage);
