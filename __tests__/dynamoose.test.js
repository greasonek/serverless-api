'use strict';

const { handler };
const dynamoose = require('dynamoose');

jest.mock('dynamoose');

describe('Test the functionality of the serverless API', () => {

  it('Can create a record', async () => {
    const people = {
      "id": '1',
      "name": 'Emma',
      "age": 33,
    };
    it('can get all records', async () => {
      const event = {
        pathParameters: null,
      };
      const scanMock = jest.fn().mockResolvedValue([{ id: '1', name: 'Emma', age: 33 }]);

    dynamoose.model.mockImplementationOnce(() => ({
      scan: scanMock,
    }));

    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual([{ id: '1', name: 'Emma', age: 33 }]);
  });

    });
    it('should update a person with a specific ID and return success', async () => {
      const event = {
        pathParameters: {
          id: '1', 
        },
        body: JSON.stringify({ name: 'Updated Name', age: 35 }),
      };
  
      const updateMock = jest.fn().mockResolvedValue({}); 
  
      dynamoose.model.mockImplementationOnce(() => ({
        update: updateMock,
      }));
  
      const response = await handler(event);
  
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual({});
    });
    it('should delete a person with a specific ID and return success', async () => {
      const event = {
        pathParameters: {
          id: '1',
        },
        body: JSON.stringify({}),
      };
  
      const deleteMock = jest.fn().mockResolvedValue({}); 
  
      dynamoose.model.mockImplementationOnce(() => ({
        delete: deleteMock,
      }));
  
      const response = await handler(event);
  
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual({});
    });
});



module.exports = { handler }