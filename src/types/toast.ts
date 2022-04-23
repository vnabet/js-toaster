export type toast = {
  title: string;
  message: string;
  link: string | null;
  position: Position | null;

}

export enum Position {
  topLeft = 'topLeft',
  topRight =  'topRight',
  bottomRight = 'bottomRight',
  bottomLeft = 'botomLeft'
}