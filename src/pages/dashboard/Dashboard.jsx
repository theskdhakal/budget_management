import React from "react";

import { TransForm } from "../../components/transaction/TransForm";
import { MainLayout } from "../../components/layout/MainLayout";
import { TransCard } from "../../components/transaction/TransCard";

export const Dashboard = () => {
  return (
    <MainLayout>
      <TransForm />

      <hr />

      <TransCard />
    </MainLayout>
  );
};
