import FriendsSection from './Components/Friends/Friends'
import AddFriendSection from './components/addfriends/AddFriends'
import SplitBill from './Components/splitBill/SplitBill'
import { useState } from 'react'

export default function App() {

  const [addFriendSection, setAddFriendSection] = useState(true)
  const [splitBillSection, setSplitBillSection] = useState(false)
  const [splitBillName, setSplitBillName] = useState(null)
  const [amountToBeAdded, setAmountToBeAdded] = useState(0)

  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Riaz Qazi',
      image: 'data:image/jpeg;base64,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',
      amount: -10,
    },
    {
      id: 2,
      name: 'Zohaib Akhtar',
      image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Final-Getty-H-2024.jpg',
      amount: 20,
    },
    {
      id: 3,
      name: 'Naveed Ali',
      image: 'data:image/jpeg;base64,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',
      amount: 0,
    }
  ])

  const addItem = (newItem) => {
   setFriends([...friends, newItem])
  }

  // funtion to manage split bill section information
  const splitBillInfoHandler = (id,otherExpense) => {
    // Create a new array with the updated object
    const updatedFriends = friends.map(item => {
      // Find the object to update
      if (item.id === id) {
        // Return a new object with the updated value
        return { ...item, amount: item.amount + otherExpense };
      }
      // Return the other objects unchanged
      return item;
    });

    // Update the state with the new array
    setFriends(updatedFriends);
  };
  

  
  return (
    <>
      {/* main */}
      <div className=" h-screen w-full flex flex-col justify-center items-center text-[#3d4146] ">
        {/* container */}
            <div className='w-[80%] h-[90%]  flex max-sm:flex max-sm:flex-col max-sm:w-full max-sm:h-full max-sm:p-2 '>
                  {/* left */}
                  <div className='w-[50%]  h-full flex-col space-y-5  p-4 px-24 pt-12 max-sm:w-full max-sm:p-0'> 
                      {/* friends */}
                      <FriendsSection friends={friends} setFriends={setFriends} setSplitBillSection={setSplitBillSection} setSplitBillName={setSplitBillName} splitBillSection={splitBillSection} amountToBeAdded={amountToBeAdded} splitBillName={splitBillName}  />

                      {/* Addfriends */}
                      <AddFriendSection addFriendSection={addFriendSection} setAddFriendSection={setAddFriendSection} addItem={addItem} />

                  </div>
                  {/* right */}
                  <div className='w-[50%] h-full  flex justify-center items-start pt-12 max-sm:w-full max-sm:p-0'> 
                      {/* <SplitBill Component /> */}
                      {splitBillSection===false ? null : <SplitBill selectedFriend={splitBillName} amountToBeAdded={amountToBeAdded} setAmountToBeAdded={setAmountToBeAdded} friends={friends} setFriends={setFriends} splitBillInfoHandler={splitBillInfoHandler} />}
                  </div>
            </div>
     </div>
    </>
  )
}
