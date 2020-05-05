/**
 * BLOCK: progressbar
 *
 * Registering a basic Progress_Bar_Block with Gutenberg.
 * Simple Progress_Bar_Block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';



const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	// For attribute sources
} = wp.blocks;
const {
	RichText,
	InspectorControls,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	ColorPicker,
	ToggleControl,
	SelectControl,

} = wp.components;



/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new Progress_Bar_Block provided a unique name and an object defining its
 * behavior. Once registered, the Progress_Bar_Block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The Progress_Bar_Block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/progressbar-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Progress Bar' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'progressbar — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-Progress_Bar_Block' ),
	],
	attributes: {

		progressBarColor: {
			type: 'string',
			default: 'red'
		},
		progressBarHeight: {
			type: 'number',
			default: 1.5
		},
		title: {
			type: 'string',
			default: 'Progressing'
		},
		titleColor: {
			type: 'string',
			default: 'red'
		},
		progressBarPercentage:{
			type: 'number',
			default: 40
		},
		ShowPercentage: {
			type: 'boolean',
			default: true
		},
		TextFontSize: {
			type: 'number',
			default: 10
		},
		ProgressBarBackGroundColor: {
			type: 'string',
			default: 'lightgray'
		},
		AnimateProgressBar: {
			type: 'boolean',
			default: true
		},
		AnimationState: {
			type: 'string',
			default: 'running'
		},
		TextFontFamily: {
			type: 'string',
			default: 'Lucida Console'
		},
		TextFontWeight: {
			type: 'string',
			default: 'normal'
		},
		ProgressBarBorderRadius: {
			type: 'number',
			default: 30
		},
		ProgressBarOpacity: {
			type: 'number',
			default: 0.5
		},
		ProgressBarStripedOrSolid: {
			type: 'boolean',
			default: true
		},
		ProgressBarWidth: {
			type: 'number',
			default: 30
		},
		ProgressBarTextStyle: {
			type: 'number',
			default: 'normal'
		},
		ProgressBarTextDecoration: {
			type: 'string',
			default: 'None'
		},
		ProgressBarTextDisplay: {
			type: 'boolean',
			default: true
		}
	},





	/**
	 * The edit function describes the structure of your Progress_Bar_Block in the context of the editor.
	 * This represents what the editor will render when the Progress_Bar_Block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit ({attributes, setAttributes}) {

		const {titleColor,title,borderColor,progressBarColor} = attributes

		const ToolBarColors = [
			{ color: 'red' },
			{ color: 'green' },
			{ color: 'blue' },
			{ color: 'orange' },
			{ color: 'yellow' }
		];

		const FontsAvalaible = [
			{ label: 'Lucida Console'},
			{ label: 'Courier'},
			{ label: 'monospace'},
			{ label: 'Arial'}
		]

		const FontWeightAvaibles= [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]

		const ProgressBarSubParentContainerStyling = {
			width: attributes.ProgressBarWidth + 'rem'
		}
		const ProgressBarOutsideContainerStyling = {
			backgroundColor: attributes.ProgressBarBackGroundColor,
			height: attributes.progressBarHeight + "em",
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationStyling = {
			width: attributes.progressBarPercentage + "%",
			backgroundColor: attributes.progressBarColor,
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationSpanStyling = {
			animationPlayState: attributes.AnimationState,
			opacity: attributes.ProgressBarOpacity
		}

		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		const TextStyling = {
			fontSize: attributes.TextFontSize + 'px',
			color: attributes.titleColor,
			align: 'left',
			fontFamily: attributes.TextFontFamily,
			fontWeight: attributes.TextFontWeight,
			fontStyle: attributes.ProgressBarTextStyle,
			textDecoration: attributes.ProgressBarTextDecoration,
			wordWrap: 'break-word'
		}
		function onTitleColorChange(NewColor) {

			setAttributes(
				{
					titleColor: NewColor
				}
			)
		}

		function onTitleChange(NewText) {
			setAttributes({
				title: NewText
			})
		}

		function onBorderColorChange(NewColor) {
			setAttributes({
				progressBorderColor: NewColor
			})
		}

		function onBarColorChange(NewColor) {

			setAttributes({
				progressBarColor: NewColor
			})
		}

		function onBarHeightChange(NewHeight) {
			setAttributes({
				progressBarHeight: NewHeight
			})
		}

		function OnBarPercentageChange(NewPercentage) {
			setAttributes({
				progressBarPercentage: NewPercentage
			})
		}

		function onGradient1ColorChange(Newcolor) {
			setAttributes({
				ProgressBarGradientColor1: Newcolor
			})
		}

		function onGradient2ColorChange(NewColor) {
			setAttributes({
				ProgressBargradientColor2: NewColor
			})
		}

		function onShowPercentageToggleChange(NewValue) {
			setAttributes({
				ShowPercentage: NewValue
			})
		}

		function onTextFontSizeChange(NewFont) {
			setAttributes({
				TextFontSize: NewFont
			})
		}

		function onAnimateProgressBar(Animate) {
			setAttributes({
				AnimateProgressBar: Animate,
			})

			if (attributes.AnimationState == 'paused'){
				setAttributes({
					AnimationState: 'running'
				})
			} else {
				setAttributes({
					AnimationState: 'paused'
				})
			}

		}

		function onChangeProgressBarBackgound(NewColor) {
			setAttributes({
				ProgressBarBackGroundColor: NewColor
			})
		}

		function onTextFontChange(NewFont) {
			setAttributes({
				TextFontFamily:  NewFont
			})
		}

		function onFontWeightChange(NewWeight) {
			setAttributes({
				TextFontWeight: NewWeight
			})
		}

		function onChangeProgressBarBorderRadius(NewBorders) {
			setAttributes({
				ProgressBarBorderRadius: NewBorders
			})
		}

		function onChangeProgressBarOpacity(NewValue) {
			setAttributes({
				ProgressBarOpacity: NewValue
			})
		}

		function onChangeProgressBarStripedOrSolid(NewOption) {
			setAttributes({
				ProgressBarStripedOrSolid: NewOption
			})
			if (NewOption === true){
				setAttributes({
					ProgressBarOpacity: 0.5
				})
			} else {
				setAttributes({
					ProgressBarOpacity: 0.0
				})
			}
		}

		function onChangeProgressBarWidth(NewWidth) {
			setAttributes({
				ProgressBarWidth: NewWidth
			})
		}
		function onChangeProgressBarTextStyle(Newstyle) {
			setAttributes({
				ProgressBarTextStyle: Newstyle
			})
		}

		function onChangeProgressBarTextDecoration(NewDecoration) {
			setAttributes({
				ProgressBarTextDecoration: NewDecoration
			})
		}

		function onChangeProgressBarTextDisplay(NewOption) {
			setAttributes({
				ProgressBarTextDisplay:NewOption
			})
		}

		return ([

				<InspectorControls>
					<PanelBody>

						<RangeControl
							label={<strong> Progress Bar Width </strong>}
							value={ attributes.ProgressBarWidth }
							onChange={ onChangeProgressBarWidth }
							min={ 5 }
							max={ 100 }
							step ={1}
						/>

						<RangeControl
							label={<strong> Progress Bar Height </strong>}
							value={ attributes.progressBarHeight }
							onChange={ onBarHeightChange }
							min={ 0 }
							max={ 10 }
							step ={0.1}
						/>


						<RangeControl
							label={<strong>Progress</strong>}
							value={ attributes.progressBarPercentage }
							onChange={ OnBarPercentageChange }
							min={ 0 }
							max={ 100 }
						/>
					</PanelBody>


					<PanelBody title={"Colors"}>

						<p><strong>Title Color</strong></p>
						<ColorPalette
							value = { titleColor }
							onChange={onTitleColorChange}
							colors = {ToolBarColors}
						/>
						<p><strong>Progress Bar Color</strong></p>
						<ColorPalette
							value = {attributes.progressBarColor}
							onChange = {onBarColorChange}
							colors = {ToolBarColors} />



					</PanelBody>

					<PanelBody title={'Text'}>

						<PanelRow>
							<p>
								Show Text
							</p>
							<ToggleControl
								checked = {attributes.ProgressBarTextDisplay}
								onChange = {onChangeProgressBarTextDisplay}
							/>
						</PanelRow>


						{
							(attributes.ProgressBarTextDisplay === false)?null:
								<div>
									<TextControl
										label={<strong>Title</strong>}
										onChange={onTitleChange}
										value = {attributes.title}
									/>

									<PanelRow>

										<p>
											Show Percentage
										</p>
										<ToggleControl
											checked = {attributes.ShowPercentage}
											onChange = {onShowPercentageToggleChange}
										/>

									</PanelRow>

									<RangeControl
										label={<p> <strong> Font Size </strong> </p>}
										value={ attributes.TextFontSize }
										onChange={ onTextFontSizeChange }
										min={ 0 }
										max={ 50 }
										step ={1}
									/>

									<PanelRow>
										<SelectControl
											label="Font Family"
											value={ attributes.TextFontFamily }
											options={ FontsAvalaible }
											onChange={ onTextFontChange}
										/>

									</PanelRow>

									<PanelRow>
										<SelectControl
											label="Weight"
											value={ attributes.TextFontWeight }
											options={ FontWeightAvaibles }
											onChange={ onFontWeightChange}
										/>
									</PanelRow>

									<SelectControl
										label="Style"
										value={ attributes.ProgressBarTextStyle }
										options={
											[
												{ label: 'Normal', value: 'Normal' },
												{ label: 'oblique', value: 'oblique' },
												{ label: 'italic', value: 'italic' },
											]
										}
										onChange={ onChangeProgressBarTextStyle}
									/>

									<SelectControl
										label="Decoration"
										value={ attributes.ProgressBarTextDecoration }
										options={
											[
												{ label: 'None', value: 'None' },
												{ label: 'underline', value: 'underline' },
												{ label: 'overline', value: 'overline' },
												{ label: 'line-through', value: 'line-through' },
											]
										}
										onChange={ onChangeProgressBarTextDecoration}
									/>
								</div>
						}



					</PanelBody>

					<PanelBody title={'Bar'}>

						<PanelRow>
							<p>
								Striped
							</p>
							<ToggleControl
								checked = {attributes.ProgressBarStripedOrSolid}
								onChange = {onChangeProgressBarStripedOrSolid}
							/>

						</PanelRow>

						{
							(attributes.ProgressBarStripedOrSolid === true)?<div>
								<PanelRow>
									<p>
										Animation
									</p>
									<ToggleControl
										checked = {attributes.AnimateProgressBar}
										onChange = {onAnimateProgressBar}
									/>

								</PanelRow>
								<RangeControl
									label={<p> <strong> Opacity </strong> </p>}
									value={ attributes.ProgressBarOpacity }
									onChange={ onChangeProgressBarOpacity }
									min={ 0.1 }
									max={ 1 }
									step ={0.1}
								/>
							</div>:null
						}





						<RangeControl
							label={<p> <strong> Border Raduis </strong> </p>}
							value={ attributes.ProgressBarBorderRadius }
							onChange={ onChangeProgressBarBorderRadius }
							min={ 1 }
							max={ 50 }
							step ={1}
						/>

					</PanelBody>

					<PanelBody title={'Background'}>

							<p><strong>Backgorund</strong></p>
							<ColorPalette
								value = { attributes.ProgressBarBackGroundColor }
								onChange={onChangeProgressBarBackgound}
								colors = {ToolBarColors}
							/>

					</PanelBody>



				</InspectorControls>,

				<div className={'ProgressBarParentContainer'}>
					<div style={ProgressBarSubParentContainerStyling} className={'ProgressBarSubContainer'}>

						{
							(attributes.ProgressBarTextDisplay === false)?null:
								<div>
									<span style={ TextStyling}>
										{attributes.title}
										{
											(attributes.ShowPercentage == false) ?
												''
												: <span style={{float: 'right'}}> {attributes.progressBarPercentage} % </span>
										}

									</span>
								</div>
						}



						<div style={ProgressBarOutsideContainerStyling} className="ProgressBarOutsideContainer">
							<div className="ProgressBarInsideAnimation" style={ProgressBarInsideAnimationStyling}>
								<span style={ProgressBarInsideAnimationSpanStyling}></span>
							</div>
						</div>

					</div>
				</div>

			]
		)
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save ({attributes}) {

		const ProgressBarSubParentContainerStyling = {
			width: attributes.ProgressBarWidth + 'rem'
		}
		const ProgressBarOutsideContainerStyling = {
			backgroundColor: attributes.ProgressBarBackGroundColor,
			height: attributes.progressBarHeight + "em",
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationStyling = {
			width: attributes.progressBarPercentage + "%",
			backgroundColor: attributes.progressBarColor,
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationSpanStyling = {
			animationPlayState: attributes.AnimationState,
			opacity: attributes.ProgressBarOpacity
		}

		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		const TextStyling = {
			fontSize: attributes.TextFontSize + 'px',
			color: attributes.titleColor,
			align: 'left',
			fontFamily: attributes.TextFontFamily,
			fontWeight: attributes.TextFontWeight,
			fontStyle: attributes.ProgressBarTextStyle,
			textDecoration: attributes.ProgressBarTextDecoration,
			wordWrap: 'break-word'
		}
		return 	<div className={'ProgressBarParentContainer'}>
			<div style={ProgressBarSubParentContainerStyling} className={'ProgressBarSubContainer'}>

				{
					(attributes.ProgressBarTextDisplay === false)?null:
						<div>
									<span style={ TextStyling}>
										{attributes.title}
										{
											(attributes.ShowPercentage == false) ?
												''
												: <span style={{float: 'right'}}> {attributes.progressBarPercentage} % </span>
										}

									</span>
						</div>
				}


				<div style={ProgressBarOutsideContainerStyling} className="ProgressBarOutsideContainer">
					<div className="ProgressBarInsideAnimation" style={ProgressBarInsideAnimationStyling}>
						<span style={ProgressBarInsideAnimationSpanStyling}></span>
					</div>
				</div>

			</div>
		</div>



	},


} );
