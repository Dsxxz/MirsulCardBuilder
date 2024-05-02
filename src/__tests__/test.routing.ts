import { runDb } from "../dbService/db";
const request = require('supertest');
import mongoose from "mongoose";
import {app} from "../index";

describe('testing of routes', ()=>{
    beforeAll( async () => {
        await runDb();
        console.log('beforeAll')
        return;
    })
    afterAll(async () => {
        console.log('afterAll')
        await mongoose.disconnect();
        return;
    })
    beforeEach((): void => {
        console.log('beforeEach')
        jest.setTimeout(50000);
        return;
    });
    beforeAll(() =>{
        app.delete('/all')
    })
    it('should be true', () => {
        expect(true).toBe(true)
    })

    it('should return an empty array if cards do not exist', async () => {
            const response = await request(app).get('/');
        console.log('it')
            expect(response.status).toBe(200);
            expect(response.body).toEqual([]); // Проверяем, что возвращается пустой массив
        } )
})
