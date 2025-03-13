import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import * as actions from '../../redux/department/action';
import * as actionsProduct from '../../redux/product/action';
import WrapperComponent from '../hoc/WrapperComponent';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {homeStyle} from './styled';
import Carousel from './view/CarouselDepartment';
import Text from '../../components/text/text';
import ProductList from './view/ProductList';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {data: dataDepartment} = useAppSelector(store => store.department);
  const {data: dataDepartmentProduct, detailDepartment} = useAppSelector(
    store => store.departmentProduct,
  );

  useEffect(() => {
    dispatch(actions.getDepartment());
  }, [dispatch]);

  const onSelectDepartment = useCallback(
    (id: string) => {
      dispatch(actionsProduct.getDepartmentProduct({id}));
    },
    [dispatch],
  );

  return (
    <View style={homeStyle.container}>
      <Text.TextLabel
        color="black"
        fontSize={20}
        message="Department Carousel"
      />
      <View style={homeStyle.containerCard}>
        <Carousel data={dataDepartment} onPress={onSelectDepartment} />
      </View>
      <Text.TextLabel
        color="black"
        fontSize={20}
        message={`Product list :  ${detailDepartment?.name}`}
      />
      <ProductList data={dataDepartmentProduct ?? []} />
    </View>
  );
};

export default WrapperComponent('HomeScreen')(HomeScreen);
