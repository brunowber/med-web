import React from 'react';

import DataGrid, { 
  Scrolling, 
  Sorting, 
  LoadPanel, 
  Column,
  Grouping,
  GroupPanel,
  MasterDetail,
  Selection,
  SearchPanel} from 'devextreme-react/data-grid';

  import { generateData } from './data.js';

import Bullet, { Font, Margin, Size, Tooltip, Border } from 'devextreme-react/bullet';

import DiasCampanha from './diasCampanha/diasCampanha.js';

import Chart, {
  Export
} from 'devextreme-react/chart';

let dataSource = generateData(100000);

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

 export default class Campanha extends React.Component {
  constructor(props) {
    super(props);
    this.contentReady = this.contentReady.bind(this);
    this.selectionChanged = this.selectionChanged.bind(this);
    this.rowClicked = this.rowClicked.bind(this)
  }
  render() {
    return (
      <div className="conteudo">
        <DataGrid
          id="grid-container"
          dataSource={dataSource}
          onContentReady={this.contentReady}
          onSelectionChanged={this.selectionChanged}
          onRowDblClick={this.rowClicked}
          showBorders={true}
          allowColumnReordering={true}
          customizeColumns={customizeColumns}
        > 
          <Selection mode="single" />
          <Column dataField="meio" customizeColumns={customizeColumns} caption="Meio de Divulgação" allowGrouping={true} />
          <Column dataField="meta" customizeColumns={customizeColumns} caption="Meta" allowGrouping={true} />
          <Column dataField="duracao" customizeColumns={customizeColumns}  caption="Duração (Dias)" allowGrouping={true} />
          <Column
            dataField="discount"
            caption="Progresso"
            dataType="number"
            format="percent"
            alignment="center"
            allowGrouping={true}
            cellRender={progressoCampanha}
            cssClass="bullet"
          /> 
          <MasterDetail enabled={false} render={renderDetail} />
          <GroupPanel visible={true} />
          <Export
            enabled={true}
            printingEnabled={false}
          />
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Grouping autoExpandAll={false} />
          <Sorting mode="none" />
          <Scrolling mode="infinite" />
          <LoadPanel enabled={false} />
        </DataGrid>
      </div>
    );
  }
  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
    { e.component.selectRowsByIndexes(0); }
  }
  selectionChanged(e) {
  //if(e.component.isRowExpanded(e.component.currentSelectedRowKeys())==true)
    e.component.collapseAll(-1)
  // else
    e.component.expandRow(e.currentSelectedRowKeys[0]);
  }

  rowClicked(e){
    e.component.collapseAll(-1);
  } 
}

function renderDetail(props) {
  return (
    <DiasCampanha meta="200"/>
  );
}

function customizeColumns(columns) {
  columns[0].width = 200;
}
