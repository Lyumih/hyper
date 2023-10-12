namespace $.$$ {
	export class $hyper_heartbeat_beat extends $.$hyper_heartbeat_beat {

		@$mol_mem
		repos() {
			console.log( 'repos' )
			let result = this.$.$mol_fetch
				.json( 'http://localhost:3000/api/v1/repo' ) as { '@rid': string, name: string, uri: string }[]
			console.log( result )
			return result || []
		}

		repos_list(): readonly any[] {
			return this.repos().map( ( repo ) => this.Repo( repo[ '@rid' ] ) )
		}

		repo_name( id: any, next?: any ): string {
			return this.repos().find( ( repo ) => repo[ '@rid' ] === id )?.name ?? ''
		}

		repo_uri( id: any, next?: any ): string {
			return this.repos().find( ( repo ) => repo[ '@rid' ] === id )?.uri ?? ''
		}
	}
}
