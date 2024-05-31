interface Size {
  width: string;
  height: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

interface Overview {
  content: string;
  source: string;
}

export interface Tdata {
  name: string;
  overview: Overview;
  structure: Overview;
  geology: Overview;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
  size: {
    mobile: Size;
    tablet: Size;
    desktop: Size;
  };
  sizeSurface: {
    mobile: Size;
    tablet: Size;
    desktop: Size;
  };
  marginTopBottom: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  absoluteTop: {
    mobile: {
      bottom: string;
      left: string;
    };
  };
}
