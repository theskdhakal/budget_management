import React from "react";

import { TransForm } from "../../components/transaction/TransForm";
import { MainLayout } from "../../components/layout/MainLayout";

export const Dashboard = () => {
  return (
    <MainLayout>
      <TransForm />
    </MainLayout>
  );
};
