import express, { Router } from 'express'
import {getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.js'

const router = express.Router()

/* less simplified way to write

router.route('/').get('TBD')
router.route('/').post('TBD')
router.route('/api/v1/employees/:id').get('TBD')
router.route('/api/v1/employees/:id').patch('TBD')
router.route('/api/v1/employees/:id').delete('TBD')
*/

// simplified way to route

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)
router.route('/api/employees/:id')
    .delete(deleteEmployee)

    /*
router.route('/:id') 
    .get(getEmployee)
    .patch(updateEmployee)
    .delete(deleteEmployee)
    */


// export the router to be used in app.js    
export default router



