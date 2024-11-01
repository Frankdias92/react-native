import { FlatList, ScrollView, Text, View } from "react-native";
import { TextMessage } from "../textMessage";
import { Controller, useForm } from "react-hook-form";
import { InputForm } from "../inputForm";
import { productsData } from "@/src/utils/products.data";
import { ProductList } from "./productList";


export function ProductsPage() {
  const { control, handleSubmit, formState: { errors } } = useForm()
  
  return (
    <View className="flex w-full gap-2 pb-44">
      <TextMessage text="Buy varied products" />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            errors={errors}

            placeholder="Search"
            textContentType='name'
            color='slate-100'
          />
        )}
        name="search"
      />

      <ScrollView>
      
        <View className="flex w-full">
        <FlatList 
          data={productsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductList 
            productsData={ item }
            />
          )}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{flexWrap: "wrap"}}
        />
        </View>

      </ScrollView>
    </View>
  )
}