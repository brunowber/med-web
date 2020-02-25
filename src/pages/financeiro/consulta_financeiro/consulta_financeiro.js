import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup,
  Summary, TotalItem,
} from 'devextreme-react/data-grid';
import { dataFinanceiro, tiposEntrada } from '../../../data'
import { locale } from "devextreme/localization";
import config from "devextreme/core/config";
import "./consulta_financeiro.scss"

const onRowPrepared = function (info) {
  console.log(info)
  if (info.rowType === "data" && info.data.entrada === 1) {
    info.rowElement.className += " conta-pagar";
  }
  else if (info.rowType === "data" && info.data.entrada === 2) {
    info.rowElement.className += " conta-receber"
  }

}

export default class ConsultaFinanceiro extends React.Component {
  constructor(props) {
    super(props);
    locale(navigator.language);
    config({ defaultCurrency: 'BRL' });
  }

  calculateCustomSummary(options) {
    var receber = 0;
    dataFinanceiro.map((valor) => {
      if (valor.entrada === 2) {
        receber += valor["valor a pagar/receber"];
      }
      return receber;
    })
    options.totalValue = receber;
  }

  render() {
    return (
      <React.Fragment >
        <h2 style={{ display: 'flex', justifyContent: 'center' }} className={'content-block'}>Consulta Financeiro</h2>
        <DataGrid style={{ display: 'flex', justifyContent: 'center' }}
          className={'dx-card wide-card'}
          dataSource={dataFinanceiro}
          showBorders={true}
          showColumnLines={true}
          allowColumnResizing={true}
          defaultFocusedRowIndex={0}
          columnAutoWidth={true}
          columnHidingEnabled={true}
          onRowPrepared={onRowPrepared}
        >
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />

          <Column dataField={'Uid'} width={90} hidingPriority={2} />
          <Column dataField={'entrada'} width={200}>
            <Lookup
              dataSource={tiposEntrada}
              valueExpr={'value'}
              displayExpr={'name'}
              
            />
          </Column>
          <Column dataField={'cliente'} width="auto" />
          <Column dataField={'Fornecedor'} width="auto" />
          <Column
            dataField={"valor a pagar/receber"}
            width="auto"
            caption="Valor a Pagar/Receber"
            dataType="number"
            format="currency"
            alignment="right"
          />

          <Column
            dataField={'pago/recebido'}
            width="auto"
            caption="Valor Pago/Recebido"
            dataType="number"
            format="currency"
            alignment="right"
          />

          <Summary calculateCustomSummary={this.calculateCustomSummary}>
            <TotalItem
              column="Uid"
              summaryType="count"
            />
            <TotalItem
              name="valor a pagar/receber"
              summaryType="custom"
              valueFormat="currency"
              displayFormat={'Valor a receber é de: {0}'}
              showInColumn="valor a pagar/receber"
              key="a"
            />
          </Summary>
        </DataGrid>
      </React.Fragment >
    );
  }
};
