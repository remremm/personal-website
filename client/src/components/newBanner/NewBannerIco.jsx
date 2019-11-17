import React from 'react';
import * as THREE from 'three';
import styles from './NewBannerIco.css';

class NewBannerIco extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      colorOne: "#600075",
      colorTwo: "black",
      colorThree: "#130020"
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
      80,
      width/height, 
      0.1,
      1000
    )
    this.camera.position.z = 70;

    // MATERIAL
    var pinkMat = new THREE.MeshPhongMaterial({
      color      :  new THREE.Color(this.state.colorOne),
      emissive   :  new THREE.Color(this.state.colorTwo),
      specular   :  new THREE.Color(this.state.colorThree),
      shininess  :  1,
      // shading    :  true,
      transparent: 1,
      opacity    : 1
    });
    
    var L1 = new THREE.PointLight( 0xffffff, 1);
    // L1.position.z = 100;
    L1.position.y = 100;
    L1.position.x = 100;
    this.scene.add(L1);
    
    var L2 = new THREE.PointLight( 0xffffff, 0.8);
    // L2.position.z = 200;
    L2.position.y = 50;
    L2.position.x = -100;
    this.scene.add(L2);

    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    // ADD CUBE
    const geometry = new THREE.IcosahedronGeometry(15,0)
    this.Ico = new THREE.Mesh(geometry, pinkMat);
    this.scene.add(this.Ico);

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
    this.Ico.rotation.x += 0.01;
    this.Ico.rotation.y += 0.05;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene(){
    this.renderer.render(this.scene, this.camera);
  }

  render(){
    return(
      <div
        style={{width: '100vw', height: '400px'}}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default NewBannerIco;