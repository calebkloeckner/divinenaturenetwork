import React, { Component } from 'react';
import Header from "../../components/Header";
import Navpills from "../../components/Navpills";
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Sacraments.css";
import Baptism from "../sevenSac/Baptism";
import Chrismation from "../sevenSac/Chrismation";
import Reconciliation from "../sevenSac/Reconciliation";
import Eucharist from "../sevenSac/Eucharist";
import HolyMatrimony from "../sevenSac/HolyMatrimony";
import HolyOrders from "../sevenSac/HolyOrders";
import HolyUnction from "../sevenSac/HolyUnction";

class Sacraments extends Component {
  state = {
    sacrament:""
  };

  handlePageChange = sac => {
    this.setState({ sacrament: sac });
  };

  renderSacrament = () => {
    if (this.state.sacrament === "Baptism") {
      return <Baptism />;
    } else if (this.state.sacrament === "Chrismation") {
      return <Chrismation />;
    } else if (this.state.sacrament === "Reconciliation") {
      return <Reconciliation />;
    } else if (this.state.sacrament === "Eucharist") {
      return <Eucharist />;
    } else if (this.state.sacrament === "Holy Matrimony") {
      return <HolyMatrimony />;
    } else if (this.state.sacrament === "Holy Orders") {
      return <HolyOrders />;
    } else if (this.state.sacrament === "Holy Unction") {
      return <HolyUnction />;
    } else {
      
    }
  };

  render() {
    return (
      <div>
        <Header sacraments="Seven Sacraments"/>
      <div className="container seven-sacraments">
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <div className="sacrament">
        {this.renderSacrament()}
        </div>
      </div>
      </div>
    );
  }
}


export default Sacraments;