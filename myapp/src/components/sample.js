import React, { Component } from 'react';
import axios from 'axios';

class VoiceRecognition extends Component {
    constructor() {
        super();
        this.state = {
            recording: false,
            result: null,
            error: null,
        };
        this.mediaRecorder = null;
    }

    startRecording = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                this.mediaRecorder = new MediaRecorder(stream);
                const audioChunks = [];

                this.mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        audioChunks.push(event.data);
                    }
                };

                this.mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    this.recognizeSpeech(audioBlob);
                };

                this.mediaRecorder.start();
                this.setState({ recording: true });
            })
            .catch((error) => {
                console.error('Error accessing the microphone:', error);
                this.setState({ error: 'Error accessing the microphone' });
            });
    };

    stopRecording = () => {
        if (this.mediaRecorder && this.state.recording) {
            this.mediaRecorder.stop();
            this.setState({ recording: false });
        }
    };

    recognizeSpeech = (audioBlob) => {
        const formData = new FormData();
        formData.append('audio', audioBlob);

        axios
            .post('http://127.0.0.1:8000/recognize/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                this.setState({ result: response.data.text, error: null });
            })
            .catch((error) => {
                console.error('Error recognizing speech:', error);
                this.setState({ result: null, error: 'Error recognizing speech' });
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.state.recording ? this.stopRecording : this.startRecording}>
                    {this.state.recording ? 'Stop Recording' : 'Start Recording'}
                </button>
                {this.state.result && <p>You said: {this.state.result}</p>}
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

export default VoiceRecognition;
