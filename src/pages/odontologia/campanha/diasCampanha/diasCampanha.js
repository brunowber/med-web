import React from 'react';

import DataGrid, { 
  Scrolling, 
  Sorting, 
  LoadPanel, 
  Column} from 'devextreme-react/data-grid';
import { generateData } from './dataDiasCampanha.js';

import Bullet, { Font, Margin, Size, Tooltip } from 'devextreme-react/bullet';

import { Export } from 'devextreme-react/chart';

let dataSource = generateData(6);

function progresso(cellData) {
  return (
    <Bullet
      showTarget={false}
      showZeroLevel={true}
      showBorders={true}
      value={cellData.value * 100}
      startScaleValue={0}
      endScaleValue={100}
    >
      <Size width={150} height={35} />
      <Margin top={5} bottom={0} left={5} shadingColor="Black"/>
      <Tooltip
        enabled={true}
        paddingTopBottom={2}
        zIndex={5}
        customizeTooltip={customizeTooltip}
      >
,        <Font size={18} />
      </Tooltip>
    </Bullet>
  );
}

function customizeTooltip(data) {
return {
  text: `${parseInt(data.value)}%`
};
}

 export default class DiasCampanha extends React.Component{
   
  constructor(props) {
    super(props);
    this.metaCampanha = this.meta
  }

  render() {
    return (
      <DataGrid
        dataSource={dataSource}
        showBorders={true}
        allowColumnReordering={true}
        customizeColumns={customizeColumns}
        onContentReady={this.onContentReady}
        printingEnabled='true'
        shadingColor='black'
      > 
        <Column dataField="dia" customizeColumns={customizeColumns} caption="Dia (útil)" allowGrouping={true} />
        <Column dataField="meta"  customizeColumns={customizeColumns} caption="Meta" allowGrouping={true} />
        <Column dataField="contato"  customizeColumns={customizeColumns} caption="Contatos" allowGrouping={true} />
        <Column dataField="agenda"  customizeColumns={customizeColumns} caption="Agendamentos" allowGrouping={true} />
        <Column dataField="proposta"  customizeColumns={customizeColumns} caption="Propostas" allowGrouping={true} />
        <Column dataField="fechados"  customizeColumns={customizeColumns} caption="Fechados" allowGrouping={true} />
        <Column
          dataField="progresso"
          caption="Progresso"
          dataType="number"
          format="percent"
          alignment="center"
          allowGrouping={true}
          cellRender={progresso}
          cssClass="bullet"
        />
        <Export
            enabled={true}
            printingEnabled={false}
          />
        <Sorting mode="none" />
        <Scrolling mode="infinite" />
        <LoadPanel enabled={false} />
      </DataGrid>
    );
  }
}

function customizeColumns(columns) {
  columns[0].width = 130;
}