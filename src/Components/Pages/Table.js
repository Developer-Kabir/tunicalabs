import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Table = () => {
    return (
        <div className='my-6'>
            <div class="overflow-x-auto">
                <table id='table-to-xls' class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>School</th>
                            <th>Class</th>
                            <th>Division</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>10</td>
                            <td>Blue Bird</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td><button class="btn btn-active btn-link">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

          <div class="btn-group pagination">
                <button class="btn btn-accent mx-3">1</button>
                <button class="btn mx-3 ">2</button>
                <button class="btn mx-3">3</button>
                <button class="btn mx-3">4</button>
            </div>
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-accent"
                    table="table-to-xls"
                    filename="Student Table"
                    sheet="tablexls"
                    buttonText="Download Excel ⇩"/>
        </div>
    );
};

export default Table;