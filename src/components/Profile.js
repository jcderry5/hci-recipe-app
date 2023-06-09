import React from 'react'
import { useState, useRef } from 'react';
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import { Container } from 'react-bootstrap';

export default function Profile() {
    const [name, name_val] = useState([]);
    const { user } = useAuth();
    const [diet, diet_val] = useState([]);
    const nameRef = useRef(name);
    const dietRef = useRef(diet);

    async function getName() {
        const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/"+user.uid+"/name"}/.json`);
        const responseJson = await val.json();
        name_val(responseJson)
        nameRef.current.value = responseJson;
        document.getElementById('updateName').value = ''
        console.log(responseJson)
      }
    function updateName() {
        update(ref(database, 'users/' + user.uid),{
          name: document.getElementById("updateName").value,
         })
         getName();
      }

      async function getDiet() {
        const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/"+user.uid+"/diet"}/.json`);
        const responseJson = await val.json();
        diet_val(responseJson)
        dietRef.current.value = responseJson;
        document.getElementById('updateDiet').value = ''
        console.log(responseJson)
      }
    function updateDiet() {
        update(ref(database, 'users/' + user.uid),{
          diet: document.getElementById("updateDiet").value,
         })
         getDiet();
      }

    function Test() {
        getName();
        getDiet();
    }
    return (
        <Container>
        <Test/>
        <div class="row profile-row" id="top-profile-div">
          <div class="col-3" >
            Name:
          </div>
          <div class="col-6" id="name" >
            <input type="text" id="updateName" class = "pref-input" placeholder={name}/>
          </div>
          <div class="col-3">
            <button id="name" onClick={() => updateName()}> Update </button>
          </div>
			  </div>
        <div class="row profile-row">
				  <div class="col-3">
					  Dietary Preferences:
				  </div>
          <div class="col-6" id="diet" >
            <input type="text" id="updateDiet" class = "pref-input" placeholder={diet}/>
          </div>
          <div class="col-3">
            <button id="diet" onClick={() => updateDiet()}> Update </button>
          </div>
			</div>

        </Container>
    )
}