import { RiFileEditLine as icon } from 'react-icons/ri';

export default {
  // Computer Name
  name: 'post',
  // visible title
  title: 'Posts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      description: 'Single blog post',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'Tell your story',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category0: 'categories.0.title',
      category1: 'categories.1.title',
      category2: 'categories.2.title',
    },
    prepare: ({ title, media, ...categories }) => {
      const catList = Object.values(categories).filter(
        (res) => res !== undefined
      );
      return {
        title,
        media,
        subtitle: catList.join(','),
      };
    },
  },
};
