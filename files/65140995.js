  beforeEach(() => {
    commit = sinon.spy();
    // Note: add users_response here.
    sinon.stub(api.users, "list").resolves(users_response);
  });

  // Use async here.
  it("should list users", async () => {
    // Use await here.
    await users.actions.list({ commit }, { page, itemsPerPage });
    expect(commit).to.have.been.calledWith("UNSET_ERROR");
    // Note: expect with property data, because called with: users.data.
    expect(commit).to.have.been.calledWith("GET_PAGINATED", users_response.data);
  });
