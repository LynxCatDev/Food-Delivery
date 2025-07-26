import { Text, View } from 'react-native';
import { ICatalog } from './catalog.interface';
import { Heading } from '../Heading/Heading';
import { CatalogItem } from './CatalogItem';

export const Catalog = ({ products, title }: ICatalog) => {
  return (
    <View className="mb-16">
      {title && <Heading>{title}</Heading>}
      {!!products.length ? (
        <View className="flex-row flex-wrap justify-between mt-4">
          {products.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </View>
      ) : (
        <Text className="mt-2">Products not found</Text>
      )}
    </View>
  );
};

export default Catalog;
