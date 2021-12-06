function select_tab(id) {
    document
      .querySelectorAll('.route')
      .forEach(item => item.classList.remove('selected'));
  
    document
      .querySelectorAll('#' + id)
      .forEach(item => item.classList.add('selected'));
  };
  
  function load_content(id) {
    document.querySelector('#content').innerHTML =
      'Content loading for ' + id + '...';
  };
  
  function push(e) {
    let id = e.target.id;
  
    select_tab(id);
    load_content(id);
  
    document.title = id;
  
    window.history.pushState(
      {
        id,
      },
      `${id}`,
      `/page/${id}`,
    );
  };
  
  window.onload = e => {
    window['start-game'].addEventListener('click', e => push(e));
    window['how-to-play'].addEventListener('click', e => push(e));
    window['high-scores'].addEventListener('click', e => push(e));
    window['settings'].addEventListener('click', e => push(e));
    window['authors'].addEventListener('click', e => push(e));
  };
  
  window.addEventListener('popstate', e => {
    let stateId = e.state.id;
  
    select_tab(stateId);
    load_content(stateId);
  });