import React, { useEffect, useState } from "react";
import styles from "./PricesPage.module.css";
import Router from "next/router";
import { RootState } from "../../store/store";
import { stripeCheckout } from "./stripeCheckout";
import { useDispatch, useSelector } from "react-redux";
import { FireDB } from "../Utils/Fire";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export function PricesPage() {
  const { uid, email } = useSelector((store: RootState) => store.user);

  return (
    <>
      <div className={styles.pricing}>
        <section className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Plan Mensual</h2>
              <p>$99 MXN</p>
            </div>
            <div className={styles.cardBenefits}>
              <h3>Acceso completo a Damsy ExcelAI</h3>
              <ul>
                <li>Fórmulas ilimitadas</li>
                <li>Explicaciones ilimitadas</li>
                <li>Acceso completo al historial de fórmulas</li>
              </ul>
              <button
                name="monthly"
                onClick={() =>
                  stripeCheckout({
                    lineItems: [
                      {
                        price: "price_1LivSQD1ZyZsk1mP95uvYcCj",
                        quantity: 1,
                      },
                    ],
                    userId: uid,
                    userEmail: email,
                  })
                }
              >
                Comprar
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Plan Anual</h2>
              <p>$799 MXN</p>
            </div>
            <div className={styles.cardBenefits}>
              <h3>Acceso completo a Damsy ExcelAI</h3>
              <ul>
                <li>Fórmulas ilimitadas</li>
                <li>Explicaciones ilimitadas</li>
                <li>Acceso completo al historial de fórmulas</li>
              </ul>
              <button
                name="anual"
                onClick={() =>
                  stripeCheckout({
                    lineItems: [
                      {
                        price: "price_1LiwYxD1ZyZsk1mPzA3mUrL2",
                        quantity: 1,
                      },
                    ],
                    userId: uid,
                    userEmail: email,
                  })
                }
              >
                Comprar
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
