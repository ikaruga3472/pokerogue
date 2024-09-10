export default class PRAccess {
  private accessdiv: HTMLElement;
  private ariaH2: HTMLElement;
  private textList: string[];
  private forceChange: boolean;

  // 싱글톤
  private static instance: PRAccess;
  private constructor () {
  }
  public static getInstance () {
    return this.instance || (this.instance = new this());
  }
  setup () {
    this.accessdiv = document.createElement("div");
    this.accessdiv.style.height = "0px";
    this.accessdiv.style.width = "0px";
    this.accessdiv.style.overflow = "hidden";
    this.accessdiv.classList.add("ariadiv");
    this.ariaH2 = document.createElement("h2");
    this.accessdiv.ariaLive = "polite";
    this.accessdiv.appendChild(this.ariaH2);
    document.body.append(this.accessdiv);
    console.log("PR Access setup complete.");
  }

  speak(text) {
    //console.log(text);
    if (text === this.ariaH2.innerHTML) {
      console.log("겹치는 문자 감지");
      return;
    } else {
      this.ariaH2.innerHTML = text;
    }
  }
}
