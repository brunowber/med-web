import React from 'react';
import { Gallery, CheckBox } from 'devextreme-react';

export default class GalleryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            loop: props.loop,
            slideShow: props.slideShow,
            showNavButtons: props.showNavButtons,
            showIndicator: props.showIndicator,
            width: props.width,
            options: props.options
        };
        this.onLoopChanged = this.onLoopChanged.bind(this);
        this.onSlideShowChanged = this.onSlideShowChanged.bind(this);
        this.onShowNavButtonsChanged = this.onShowNavButtonsChanged.bind(this);
        this.onShowIndicatorChanged = this.onShowIndicatorChanged.bind(this);
    }

    render() {
        let options;
        if (this.state.options) {
            options =
                <div className="options">
                    <div className="caption">Opções</div>
                    <div className="option">
                        <CheckBox text="Loop" value={this.state.loop} onValueChanged={this.onLoopChanged} />
                    </div>
                    <div className="option">
                        <CheckBox text="Slide show" value={this.state.slideShow} onValueChanged={this.onSlideShowChanged} />
                    </div>
                    <div className="option">
                        <CheckBox text="Botões de navegação" value={this.state.showNavButtons} onValueChanged={this.onShowNavButtonsChanged} />
                    </div>
                    <div className="option">
                        <CheckBox text="Indicadores" value={this.state.showIndicator} onValueChanged={this.onShowIndicatorChanged} />
                    </div>
                </div>
        }

        return (
            <div>
                <div className="widget-container">
                    <Gallery
                        id="gallery"
                        dataSource={this.state.data}
                        height={300}
                        width={this.state.width}
                        slideshowDelay={this.state.slideShow ? 2000 : 0}
                        loop={this.state.loop}
                        showNavButtons={this.state.showNavButtons}
                        showIndicator={this.state.showIndicator} />
                </div>
                {options}

            </div>
        );
    }

    onLoopChanged(data) {
        this.setState({
            loop: data.value
        });
    }
    onSlideShowChanged(data) {
        this.setState({
            slideShow: data.value
        });
    }
    onShowNavButtonsChanged(data) {
        this.setState({
            showNavButtons: data.value
        });
    }
    onShowIndicatorChanged(data) {
        this.setState({
            showIndicator: data.value
        });
    }
}
{/* <GalleryComponent
      data={fotos}
      width={400}
      slideShow={false}
      loop={true}
      showIndicator={true}
      showNavButtons={true}
      options={false}
    /> */}