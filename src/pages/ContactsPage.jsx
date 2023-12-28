import { Box, Card, CardBody, Heading } from '@chakra-ui/react';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

const ContactsPage = () => {
  return (
    <>
      <Box
        display="flex"
        mx="auto"
        justifyContent="center"
        alignItems="center"
        maxW="6xl"
        flexWrap="wrap"
        gap="20"
      >
        <Card mx="auto" maxW="md" p="6">
          <CardBody>
            <Heading as="h3" size="lg" mb="35" textAlign="center">
              Phonebook
            </Heading>
            <FormAddContact />
          </CardBody>
        </Card>
        <Card mx="auto" maxW="md" p="6">
          <CardBody>
            <Heading as="h3" size="lg" mb="35" textAlign="center">
              Contacts
            </Heading>
            <Filter />
            <ContactsList />
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default ContactsPage;
