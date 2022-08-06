const initialstate = {
    agendaLists: [
        {
            id:'1', 
            title:'Lorem ipsum ',
            desc:'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis part',
            status:'Active'
        },
        {
            id:'2', 
            title:'Nulla consequa',
            desc:'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean',
            status:'Active'

        },
        {
            id:'3',
            title:'viverra quis, feugiat',
            desc:'ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
            status:'Inactive'

        }
    ]
  };
  
  const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "ADD_LIST":
        return {
          ...state,
          agendaLists: state.agendaLists.concat(action.payload)
        };
      case "EDIT_LIST":
        return {
          ...state,
          agendaLists: state.agendaLists.map((content, i) => {
           return content.id === action.payload.id
              ? {
                  ...content,
                  title: action.payload.title,
                  desc: action.payload.desc,
                  status:action.payload.status
                }
              : content
              })
        };
      case "DELETE_LIST":
        return {
          ...state,
          agendaLists: state.agendaLists.filter((item) => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  