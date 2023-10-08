namespace $.$$ {
	export class $hyper_heartbeat_auth extends $.$hyper_heartbeat_auth {
		
		login_submit( next?: any ) {
			this.$.$mol_state_local.value('auth', true);
		}

		login_demo( next?: any ) {
			this.login_submit( next );
		}
		
	}
}
