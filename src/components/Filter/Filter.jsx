import React from 'react';
import { FilterWrap, SearchTitle, SearchInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { searchContact } from 'store/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(searchContact(e.target.value));
  };

  return (
    <FilterWrap>
      <SearchTitle>Search Contact</SearchTitle>
      <SearchInput name="filter" type="text" onChange={handleSearch} />
    </FilterWrap>
  );
};
