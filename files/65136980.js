import React from 'react';
import MP3Options from './mp3';
import SubmitButton from './submit';

class App extends React.Component {
  state = { codec: 'MP3', mp3EncodingType: 'cbr' };

  onCodecChange = (e) => {
    this.setState({ codec: e.target.value });
  };

  onMp3EncodingTypeChange = (event) => {
    this.setState({ mp3EncodingType: event.target.value });
  };

  submitClicked = () => {
    console.log('Submit button was clicked.');
    console.log(this.state.mp3EncodingType);
  };

  renderComponent = () => {
    const { codec, mp3EncodingType } = this.state;
    switch (codec) {
      case 'MP3':
        return (
          <MP3Options
            mp3EncodingType={mp3EncodingType}
            onChange={this.onMp3EncodingTypeChange}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      // Codec options div.
      <div>
        <select
          id="codecs"
          onChange={this.onCodecChange}
          value={this.state.codec}
        >
          <option value="AAC">AAC (.m4a)</option>
          <option value="AC3">AC3 (Dolby Digital)</option>
          <option value="ALAC">ALAC</option>
          <option value="CAF">CAF (.caf)</option>
          <option value="DTS">DTS</option>
          <option value="FLAC">FLAC</option>
          <option value="MKA">MKA (extract audio without encoding it)</option>
          <option value="MKV">MKV (.mkv)</option>
          <option value="MP3">MP3</option>
          <option value="MP4">MP4 (.mp4)</option>
          <option value="Opus">Opus (.opus)</option>
          <option value="Vorbis">Vorbis (.ogg)</option>
          <option value="WAV">WAV</option>
        </select>
        {this.renderComponent()}
        <SubmitButton onSubmit={this.submitClicked} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Mp3Cbr from './Mp3Cbr';
import Mp3Vbr from './Mp3Vbr';

class MP3Options extends React.Component {
  renderComponent = () => {
    const { mp3EncodingType } = this.props;
    switch (mp3EncodingType) {
      // Show the Mp3Cbr component if CBR or ABR is selected. Show the Mp3Vbr component if VBR is selected.
      case 'cbr':
        return <Mp3Cbr />;
      case 'abr':
        return <Mp3Cbr />;
      case 'vbr':
        return <Mp3Vbr />;
      default:
        return null;
    }
  };

  render() {
    const { onChange } = this.props;
    return (
      <div id="mp3_encoding_div">
        <label htmlFor="mp3_encoding_type">Encoding Type:</label>
        <select id="mp3_encoding_type" onChange={onChange}>
          <option disabled value>
            Select encoding type
          </option>
          <option value="cbr">CBR (Constant Bitrate)</option>
          <option value="abr">ABR (Average Bitrate)</option>
          <option value="vbr">VBR (Variable Bitrate)</option>
        </select>
        {this.renderComponent()}
      </div>
    );
  }
}

export default MP3Options;
