export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e30b5c064aa8512d279d85a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-site-teste-studio',
                  apiId: '29da38c8-c3ee-4cd0-a11f-dc23b7481ee2'
                },
                {
                  buildHookId: '5e30b5c0b956f6f01f627cb2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-site-teste',
                  apiId: 'e1b1b432-a71f-4df1-9892-97413edc1c8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roberlancarvalho/sanity-gatsby-site-teste',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-site-teste.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
