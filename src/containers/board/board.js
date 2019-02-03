class Map extends Component {
  constructor(props) {
    super(props);
    console.log("map const");

    let self = this;

    // strange it needs a timeout...
    setTimeout(() => {
      self.draw();
    }, 0);
  }

  draw() {
    console.log("draw");
    const viewport = Snap("#viewport");
    const paperGroup = viewport.g();

    const floor = paperGroup.g();

    const tileWidth = 100;
    const tileHeight = tileWidth;

    const totalRows = 4;
    const totalCols = 4;

    for (let i = 0; i < totalCols; i++) {
      for (let j = 0; j < totalRows; j++) {
        let x = j * tileWidth;
        let y = i * tileWidth;
        floor.rect(x, y, tileWidth, tileHeight),
          floor.rect(x + tileWidth, y, tileWidth, tileHeight),
          floor.rect(x, y + tileWidth, tileWidth, tileHeight),
          floor.rect(x + tileWidth, y + tileHeight, tileWidth, tileHeight);
      }
    }

    this.animateIso(paperGroup, tileWidth);
  }

  animateIso(group, tileWidth) {
    let tileWidthPlusPadding = tileWidth + 300;
    // 0.7 reco
    var isometricTransform =
      "t" + tileWidthPlusPadding + ",0s1,0.45,0,0r45,0,0";

    //0.45 is the pitch

    group.animate({ transform: isometricTransform }, 0);
  }

  render() {
    return (
      <div class="mapContainer">
        <svg id="viewport" />
      </div>
    );
  }
}
