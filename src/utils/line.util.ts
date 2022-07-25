import { Line } from "@models/line.model";
import { Product } from "@models/product.model";
import { Subscription } from "@models/subscription.model";

/**
 * Util for line
 *
 * @author bcueva
 * @version 1.0.0
 */
export abstract class LineUtil {
  /**
   * Filter products by subscription for line
   *
   * @param line Line
   * @param products Products
   * @returns
   */
  static filterProductsBySubscriptions(line: Line, products: Product[]): Product[] {
    if (!Array.isArray(line.subscriptions) || line.subscriptions.length === 0) {
      return [];
    }
    return line.subscriptions.map(
      (subscription: Subscription) =>
        products.find(
          (product: Product) => product.id === subscription.productId
        ) as Product
    );
  }
}
