import React , {Component} from 'react';

class Tracks extends Component {
    //play audio returns a FUNCTION because of how playAudio(preview_url) is being called immediately in the jsx.
    //weird as f please ask a professional whats going on.
    constructor(props) {
      super(props);

      this.state = {
        playing: false,
        audio: null,
        playingPreviewUrl: null
      }
    }

    playAudio(previewUrl) {
        const audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({playing: true, audio: audio, playingPreviewUrl: previewUrl});
        } else if (this.state.playingPreviewUrl === previewUrl) {
            this.state.audio.pause();
            this.setState({ playing: false});
        } else {
            this.state.audio.pause();
            audio.play();
            this.setState({ audio, playingPreviewUrl: previewUrl});
        }
    }
    
     trackIcon(track) {
        //add a guard clause to see if the song even has a preview or not. 
        //guard clauses SAVE YOU FROM SO MUCH IF ELSE CONDITION LOGIC.
        if (!track.preview_url) {
            return <span>N/A</span>
        }

        //this function is actually acting like a stateless functional component
        //its just returning a pause looking symbol || inside a span.
        if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
            return <span>||</span>
        }
        //returns a PLAY ICON on initial render.
        return <span>&#9654;</span>
    }

    render () {
        const {tracks} = this.props;
        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album , preview_url } = track;
                        return (
                            // OHHHHHH,you know how onClick={nameofFunction} without ();
                            //WHATS HAPPENING IS THAT on the inital render the onClick method EXECUTES RIGHT AWAY.
                            //and in its place it puts the REAL function ready to be executed anytime.
                           
                            <div key={id} onClick={() => {this.playAudio(preview_url)}} className='track'>
                                <img src={album.images[0].url} alt='track-image' className='track-image'/>
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;