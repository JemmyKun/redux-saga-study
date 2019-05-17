import React, { Component } from 'react';
import $ from 'jquery';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    copyAll() {
        let text = $('#transText').text();
        var oInput = document.createElement('input');
        oInput.value = text;
        oInput.id = 'copyInput';
        document.body.appendChild(oInput);
        $('#copyInput').hide();
        oInput.select(); // 选择文本
          let succeeded = void 0;
		try {
			succeeded =   document.execCommand("Copy"); 
		} catch (err) {
			succeeded = false;
		}      
		if (succeeded ) {
		 alert('复制成功');
		}else{
            alert('复制失败');
        } 
        $('#copyInput').remove();
    }   
    
    render() {  
        return (
            <div className="text-box">
                <div><button onClick={this.copyAll.bind(this)}>复制全文</button></div>
                <div id="transText">
                    <ul className="transfer-text-box"><li className="transfer-text-item " time="8" data-time="7523"><p className="name meeting-item" time="8" data-type="0">主持人:</p><p className="word meeting-item origin-word" time="8">主要任务说的不能自己啊。</p></li><li className="transfer-text-item " time="179" data-time="179295"><p className="name meeting-item" time="179" data-type="0">主持人:</p><p className="word meeting-item origin-word" time="179">二，就说了这么几句话嘛。</p></li><li className="transfer-text-item " time="186" data-time="185637"><p className="name meeting-item" time="186" data-type="1">发言人A:</p><p className="word meeting-item origin-word" time="186">画面！</p></li><li className="transfer-text-item " time="193" data-time="193425"><p className="name meeting-item" time="193" data-type="0">主持人:</p><p className="word meeting-item origin-word" time="193">啊到目前为止。唉呦几个八个。</p></li><li className="transfer-text-item " time="198" data-time="197524"><p className="name meeting-item" time="198" data-type="1">发言人A:</p><p className="word meeting-item origin-word" time="198">到目前为止，还有几个八个。</p></li></ul>
                </div>
                <div><textarea >
                    
                    
                    </textarea> </div> 
            </div>
        )
    }
}

export default Text;