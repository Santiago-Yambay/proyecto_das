export abstract class FormatUtil {
  static cardMask(cardNumber: string): string {
    if (!cardNumber) {
      return "";
    }
    const size = cardNumber.length;
    return `XXXX XXXX XXXX ${cardNumber.substring(size - 4, size)}`;
  }
}
