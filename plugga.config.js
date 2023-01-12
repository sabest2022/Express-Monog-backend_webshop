// DEN HÄR FILEN MÅSTE REDIGERAS AV DIG SOM STUNDENT
// SÅ ATT TESTERNA KAN HITTA DINA MODELLER
import { beforeAll } from 'vitest';

beforeAll(async () => {
  // ANGE RÄTT IMPORT TILL DINA MODELLER NEDAN:
  const { OrderModel } = await import('./src/resources/order/order.model');
  const { ProductModel } = await import(
    './src/resources/product/product.model'
  );
  const { UserModel } = await import('./src/resources/user/user.model');
  const { CategoryModel } = await import(
    './src/resources/category/category.model'
  );

  // DE HÄR RADERNA SKA INTE ÄNDRAS!
  global.OrderModel = OrderModel;
  global.ProductModel = ProductModel;
  global.UserModel = UserModel;
  global.CategoryModel = CategoryModel;
});
