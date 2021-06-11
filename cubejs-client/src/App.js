import React from 'react';

import {
    QueryBuilder
} from '@cubejs-client/react'

import cubejs from '@cubejs-client/core';

const cubejsToken = 'jousting_turkeys',
    apiUrl = 'http://localhost:4001/cubejs-api/v1',
    cubejsApi = cubejs(cubejsToken, {
        apiUrl: apiUrl
    });

function App() {
    const query = {
        measures: [
            'Orders.count'
        ],
        dimensions: [
            'Users.company'
        ],
        filters: [
          {
              member: 'Users.company',
              operator: 'contains',
              values: [
                  'Limited'
              ]
          }
        ]
    };

    return (
      <QueryBuilder cubejsApi={cubejsApi} defaultQuery={query} render={(queryBuilderRenderProps) => {
          const {
              filters,
              query,
              availableDimensions,
              updateFilters
          } = queryBuilderRenderProps;
  
          return (
              <div>
                  <div>
                    Filters {filters.length}: {JSON.stringify(filters)}
                  </div>
                  <br />
                  <div>
                    Query Filters {query.filters.length}: {JSON.stringify(query.filters)}
                  </div>
  
                  <button onClick={() => {
                    const usersCompanyDim = availableDimensions.find(dimension => dimension.name === 'Users.company');

                    updateFilters.add({
                      dimension: usersCompanyDim,
                      operator: 'notContains',
                      values: [
                        'Cubilia'
                      ]
                    }) 
                  }}>Add Filter That Will Blow Not Be In Filters</button>
              </div>
          )
      }} />
    );
}

export default App;