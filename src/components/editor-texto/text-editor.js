import React from 'react';
import HtmlEditor, { Toolbar, Item } from 'devextreme-react/html-editor';

import './text-editor.scss';

export const markup = `
    <h2>
        <img src="images/widgets/HtmlEditor.svg" alt="HtmlEditor">
        Formatted Text Editor (HTML Editor)
    </h2>
    <br>
    <p>DevExtreme HTML5 JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
`;


const optionsUndo = { hint: "Desfazer" }
const optionsRedo = { hint: "Refazer" }
const optionsSize = { noDataText:"aaa", displayValue: "Tamanho", hint: "Tamanho" }

export default class TextEditor extends React.Component {
    constructor() {
        super();

        this.state = {
            valueContent: markup,
            editorValueType: 'html'
        };

        this.sizeValues = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];
        this.fontValues = ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'];

        this.valueChanged = this.valueChanged.bind(this);
        this.valueTypeChanged = this.valueTypeChanged.bind(this);
    }
    render() {
        let { valueContent, editorValueType } = this.state;

        return (
            <React.Fragment>
                <div className="widget-container">
                    <HtmlEditor
                        height={600}
                        value={valueContent}
                        valueType={editorValueType}
                        onValueChanged={this.valueChanged}
                        activeStateEnabled={true}
                    >
                        <Toolbar>
                            <Item options={optionsUndo} formatName="undo" />
                            <Item options={optionsRedo} formatName="redo" />
                            <Item formatName="separator" />
                            <Item
                                options={optionsSize}
                                formatName="size"
                                formatValues={this.sizeValues}
                            />
                            <Item
                                formatName="font"
                                formatValues={this.fontValues}
                            />
                            <Item formatName="separator" />
                            <Item formatName="bold" />
                            <Item formatName="italic" />
                            <Item formatName="strike" />
                            <Item formatName="underline" />
                            <Item formatName="separator" />
                            <Item formatName="alignLeft" />
                            <Item formatName="alignCenter" />
                            <Item formatName="alignRight" />
                            <Item formatName="alignJustify" />
                            <Item formatName="separator" />
                            <Item formatName="color" />
                            <Item formatName="background" />
                            <Item formatName="separator" />
                            <Item formatName="link" />
                            <Item formatName="image" />
                            <Item formatName="separator" />
                            <Item formatName="clear" />
                            <Item formatName="codeBlock" />
                            <Item formatName="blockquote" />
                        </Toolbar>
                    </HtmlEditor>
                </div>
            </React.Fragment>
        );
    }
    valueChanged(e) {
        this.setState({
            valueContent: e.value
        });
    }
    valueTypeChanged(e) {
        this.setState({
            editorValueType: e.addedItems[0].text.toLowerCase()
        });
    }
}