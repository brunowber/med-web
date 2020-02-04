import React from 'react';

import DataGrid, { 
  Scrolling, 
  Sorting, 
  LoadPanel, 
  Column} from 'devextreme-react/data-grid';
import { generateData } from './dataDiasCampanha.js';

import Bullet, { Font, Margin, Size, Tooltip, Border } from 'devextreme-react/bullet';



let dataSource = generateData(6);

function progressoCampanha(cellData) {
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
  }

  render() {
    return (
      <DataGrid
        dataSource={dataSource}
        showBorders={true}
        allowColumnReordering={true}
        customizeColumns={customizeColumns}
        onContentReady={this.onContentReady}
      > 
        <Column dataField="dia" customizeColumns={customizeColumns} caption="Meio  de Divulgação" allowGrouping={true} />
        <Column dataField="meta" dataSource={parseFloat(this.props.meta)/6} customizeColumns={customizeColumns} caption="Meta" allowGrouping={true} />
        <Column dataField="duracao" customizeColumns={customizeColumns}  caption="Duração (Dias)" allowGrouping={true} />
        <Column
          dataField="progressoCampanha"
          caption="Progresso"
          dataType="number"
          format="percent"
          alignment="center"
          allowGrouping={true}
          cellRender={progressoCampanha}
          cssClass="bullet"
        /> 
        <Sorting mode="none" />
        <Scrolling mode="infinite" />
        <LoadPanel enabled={false} />
      </DataGrid>
    );
  }
}

function customizeColumns(columns) {
  columns[0].width = 200;
}