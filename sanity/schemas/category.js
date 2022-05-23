import React from 'react';
import { CgHashtag as icon } from 'react-icons/cg';
import { FaGlobeEurope, FaGlobeAsia } from 'react-icons/fa';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      description: '(Category name)',
    },
    {
      name: 'europe',
      title: 'Europe',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'asia',
      title: 'Asia',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'title',
      europe: 'europe',
    },
    prepare: ({ name, europe }) => ({
      title: name,
      media: (
        <span
          style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
        >
          {europe ? <FaGlobeEurope /> : <FaGlobeAsia />}
        </span>
      ),
    }),
  },
};
