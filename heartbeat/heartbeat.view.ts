namespace $.$$ {
	export class $hyper_heartbeat extends $.$hyper_heartbeat {
		
		sub(): readonly any[] {
			const auth = this.$.$mol_state_local.value('auth');
			return auth ? [this.Menu()] : [this.Auth()]
		}
		
		logout( next?: any ) {
			this.$.$mol_state_local.value('auth', false);
		}
	}
}
