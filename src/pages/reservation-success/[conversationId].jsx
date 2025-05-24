import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getReservationById } from "../../store/reservation/thunk";
import ReservationSuccessView from "./index";
import PageLoading from "../../components/pageLoading";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

const ReservationSuccessPage = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.reservation);


  console.log('loading',loading)

  useEffect(() => {
    if (query.conversationId) {
      dispatch(getReservationById(query.conversationId));
    }
  }, [query.conversationId]);

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

