import Layout from '@/components/Layout/Layout';
import { Text, View } from 'react-native';
import { useSearch } from './useSearch';
import { Heading } from '@/components/Heading/Heading';
import { ISearchFormData } from './search.interface';
import { Field } from '@/components/Field/Field';
import { Loader } from '@/components/Loader/Loader';
import Catalog from '@/components/Catalog/Catalog';

const Search = () => {
  const { products, isLoading, searchValue, control } = useSearch();
  return (
    <Layout>
      <Heading>Search</Heading>

      <View className="mt-3">
        <Field<ISearchFormData>
          control={control}
          placeholder="Type something ..."
          name="searchValue"
          keyboardType="web-search"
        />

        {!!searchValue && (
          <View className="mt-2">
            {isLoading ? <Loader /> : <Catalog products={products || []} />}
          </View>
        )}
      </View>
    </Layout>
  );
};

export default Search;
