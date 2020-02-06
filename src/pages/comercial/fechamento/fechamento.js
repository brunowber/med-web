import React from 'react';

import DataGrid, { 
    Column, 
    Editing, 
    Summary, 
    TotalItem } from 'devextreme-react/data-grid';

import service from './dataFechamento.js';

class Fechamento extends React.Component {
  constructor(props) {
    super(props);
    this.orders = service.getOrders();
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainer"
          dataSource={this.orders}
          keyExpr="ID"
          repaintChangesOnly={true}
          showBorders={true}>
          <Editing
            mode="batch"
            allowAdding={true}
            allowUpdating={true}
            allowDeleting={true}>
          </Editing>
          
          <Column dataField="OrderNumber" width={130} caption="Protocolo" />
          <Column dataField="OrderDate" dataType="Data" />
          <Column dataField="Employee" caption="Profissional Executante" />
          <Column dataField="CustomerStoreCity" caption="Consultório" />
          <Column dataField="CustomerStoreState" caption="Observação" />
          <Column dataField="SaleAmount" alignment="right" caption="Valor" format="currency" style="#fff" editorOptions={{ format: 'currency' }} />
          <Summary recalculateWhileEditing={true}>
            <TotalItem
              column="OrderNumber"
              summaryType="count" 
              //customizeText="Total de procedimentos" 
              />
            <TotalItem
              column="SaleAmount"
              summaryType="sum"
              valueFormat="currency"
              />
          </Summary>
        </DataGrid>
      </React.Fragment>
    );
  } 
}
export default Fechamento;