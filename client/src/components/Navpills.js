import React from "react";

const Navpills = props => (
  <ul className="nav nav-tabs">
    <li
      onClick={() => props.handlePageChange("Baptism")}
      className={props.currentPage === "Baptism" ? "active" : ""}
    >
      <a>Baptism</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Chrismation")}
      className={props.currentPage === "Chrismation" ? "active" : ""}
    >
      <a>Chrismation</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Reconciliation")}
      className={props.currentPage === "Reconciliation" ? "active" : ""}
    >
      <a>Reconciliation</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Eucharist")}
      className={props.currentPage === "Eucharist" ? "active" : ""}
    >
      <a>Eucharist</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Holy Matrimony")}
      className={props.currentPage === "Holy Matrimony" ? "active" : ""}
    >
      <a>Holy Matrimony</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Holy Orders")}
      className={props.currentPage === "Holy Orders" ? "active" : ""}
    >
      <a>Holy Orders</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Holy Unction")}
      className={props.currentPage === "Holy Unction" ? "active" : ""}
    >
      <a>Holy Unction</a>
    </li>
  </ul>
);

export default Navpills;
