loadingData = true;
ngOnInit() {
    this._assingedSiteService.getAssignedSitesForLogInUser().subscribe((res) => {
        this.sites = res;
        console.log(this.sites);
        this.loadingData = false;
      }, (error) => {
        console.log(error);
      }
    );
}
