import React from "react";
import AuthView from "./AuthView";

export const HomeView = () => (
  <div className="home-container">
    <div>
      <h1>taxicom</h1>
      <h2>
        Haydi sen de bize katıl bekleme derdin olmasın!
      </h2>
      <AuthView />
    </div>
  </div>
);

export default HomeView;
