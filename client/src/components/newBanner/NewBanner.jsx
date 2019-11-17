import React from 'react';
import styles from './NewBanner.css';
import * as THREE from 'three';

class NewBanner extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  componentDidMount(){
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    // ADD SCENE
    this.scene = new THREE.Scene();

    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width/height,
      0.1,
      1000
    )
    this.camera.position.z = 4;

    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    // ADD CUBE
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color: '#433F81'});
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.start();
  };

  componentWillUnmount(){
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  };

  start(){
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop(){
    cancelAnimationFrame(this.frameId);
  }

  animate(){
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene(){
    this.renderer.render(this.scene, this.camera);
  }

  render(){
    return(
      <div className={styles.newBackground} ref={(mount) => { this.mount = mount }}>
        {/* <div 
          style={{width: '100vw', height: '400px'}}
          ref={(mount) => { this.mount = mount }}
        /> */}
       </div> 
    )
  }
}

export default NewBanner;