interface Size {
  width: string;
  height: string;
}

interface Overview {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface Tdata {
  geology: {
    content: string;
    source: string;
  };
  images: Images;
  name: string;
  overview: Overview;
  radius: string;
  revolution: string;
  rotation: string;
  size: {
    desktop: Size;
    mobile: Size;
    tablet: Size;
  };
  structure: {
    content: string;
    source: string;
  };
  temperature: string;
}
